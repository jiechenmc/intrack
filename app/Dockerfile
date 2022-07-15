FROM python:buster

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

WORKDIR /

CMD ["flask", "run", "--host", "0.0.0.0"]

EXPOSE 5000