from fastapi import APIRouter
from app.models.message import Message, MessageCreate

router = APIRouter()

@router.get("/", response_model=Message)
async def get_message():
    return Message(message="Привіт, Світ! Це FastAPI API.")

@router.post("/", response_model=Message)
async def create_message(msg: MessageCreate):
    return Message(message=msg.message)
