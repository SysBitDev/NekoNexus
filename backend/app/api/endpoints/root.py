from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def read_api_root():
    """
    Повертає коротке повідомлення при зверненні до /api
    """
    return {"message": "Це кореневий маршрут API. Спробуйте /messages або /trainings"}
