from fastapi import APIRouter
from app.models.message import Message

router = APIRouter()

@router.get("/", response_model=Message)
async def get_message():

    return Message(message="Привіт, це тестове повідомлення з /api/messages/")

@router.get("/all")
async def get_all_messages():

    return ["Повідомлення №1", "Повідомлення №2"]

# Інші ендпоінти (POST, PUT, DELETE тощо)
