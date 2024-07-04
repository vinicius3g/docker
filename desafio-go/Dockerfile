# declaração da imagem base golang
FROM golang:alpine AS builder

# criaçao do diretorio
WORKDIR /app

## copiando o app
COPY . .

# Compilando o binário removendo informações de debug
RUN go build -ldflags '-s -w' main.go

##Stage2
# iniciando scratch
FROM scratch

# diretorio de trabalho
WORKDIR /

COPY --from=builder /app / 

CMD ["./main"]
