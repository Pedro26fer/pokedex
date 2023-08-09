# Pokedex

Aplicação desenvolvida para teste técnico

## Como Rodar a Aplicação usando Docker

Este guia detalha os passos necessários para executar a aplicação Pokedex usando Docker. Siga estas etapas simples para começar a explorar a Pokedex em questão de minutos.

### Pré-requisitos

Antes de começar, certifique-se de que você tenha o Docker instalado em sua máquina. Se você ainda não o tem, faça o [download e a instalação gratuitos aqui](https://lnkd.in/ds2aeAUC).

### Passo a Passo

1. **Clone o Repositório**

   Abra seu terminal ou prompt de comando e execute o seguinte comando para clonar o repositório da aplicação Pokedex:
   ```sh
   git clone git@github.com:Pedro26fer/pokedex.git
   ```

2. **Navegue até o Diretório**

   Use o terminal para navegar até o diretório onde os arquivos da aplicação foram clonados:
   ```sh
   cd pokedex
   ```

3. **Construa a Imagem Docker**

   Agora, construa a imagem Docker da aplicação executando o seguinte comando:
   ```sh
   docker build -t pokedex-app .
   ```

4. **Inicie o Contêiner**

   Após a conclusão da construção, inicie um contêiner da aplicação usando o comando abaixo:
   ```sh
   docker run -p 3000:3000 pokedex-app
   ```

5. **Acesse a Aplicação**

   Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar a Pokedex em ação!

Agora você está pronto para explorar a Pokedex. Divirta-se!

Se desejar interromper a execução da aplicação, você pode pressionar `Ctrl + C` no terminal para parar o contêiner.

**Nota:** Verifique se a porta 3000 não está sendo usada por outra aplicação em seu sistema. Se estiver, você pode ajustar a porta no comando `docker run -p` para evitar conflitos.
