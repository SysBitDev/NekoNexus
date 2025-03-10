from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import root, message, trainings
from app.core.config import settings

app = FastAPI(
    title="ML Training API",
    description="API для моніторингу та запуску навчання нейромереж",
    version="1.0.0"
)

# Налаштування CORS
origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root.router, prefix="/api", tags=["root"])
app.include_router(message.router, prefix="/api/messages", tags=["messages"])
app.include_router(trainings.router, prefix="/api/trainings", tags=["trainings"])

@app.get("/", include_in_schema=False)
async def read_main():
    """
    Головна сторінка (коренева).
    """
    return {"message": "Ласкаво просимо до MLmonitor! Спробуйте /api"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
