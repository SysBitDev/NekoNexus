import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(sender_email, app_password, recipient_email, subject, message_body):
    try:
        smtp_server = "smtp.gmail.com"
        smtp_port = 587

        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = recipient_email
        message["Subject"] = subject

        # Тіло повідомлення
        message.attach(MIMEText(message_body, "plain"))

        # З'єднання з SMTP сервером
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(sender_email, app_password)  # Авторизація
            server.sendmail(sender_email, recipient_email, message.as_string())  # Надсилання листа

        print(f"Лист успішно відправлено до {recipient_email}")

    except Exception as e:
        print(f"Помилка під час надсилання листа: {e}")

sender_email = "your_email@gmail.com"  # Ваш Gmail
app_password = "your_app_password"  # Пароль для додатків
recipient_email = "recipient_email@gmail.com"  # Кому відправляємо
subject = "Тема листа"
message_body = "Привіт! Це тестове повідомлення з Python."

send_email(sender_email, app_password, recipient_email, subject, message_body)
