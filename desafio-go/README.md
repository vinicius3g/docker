## Desafio GO

### Objetivo
- criar uma imagem imagem do GO com docker e subir ao docker hub
- a image tem que ter menos que 2mb
- quando se executar a imagem tem que se obter o resultado **Full Cycle Rocks!!**

### Para baixar a imagem e testar
 rode o comando para baixar a image do docker hub e executar: 

```bash
docker pull vinicius3g/vinicius-fullcyle:vinicius-fullcycle
docker run vinicius3g/vinicius-fullcyle:vinicius-fullcycle
```
para criar sua proprioa imagem e subir bastar rodar os comandos.

```bash
docker build -t 'nome da sua imagem' .  
docker run 'nome da sua imagem'
```