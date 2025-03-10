from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

router = APIRouter()

class TrainingJob(BaseModel):
    id: int
    modelName: str
    epochs: int
    learningRate: float
    status: str

class TrainingJobCreate(BaseModel):
    modelName: str
    epochs: int
    learningRate: float

training_jobs: List[TrainingJob] = []
job_counter = 1

@router.get("/", response_model=List[TrainingJob])
async def get_trainings():
    """
    GET /api/trainings/ – Повертає список усіх навчальних задач.
    """
    return training_jobs

@router.post("/", response_model=TrainingJob)
async def create_training(job: TrainingJobCreate):
    """
    POST /api/trainings/ – Створює нову навчальну задачу.
    """
    global job_counter
    new_job = TrainingJob(
        id=job_counter,
        modelName=job.modelName,
        epochs=job.epochs,
        learningRate=job.learningRate,
        status="Запущено"
    )
    training_jobs.append(new_job)
    job_counter += 1

    return new_job
