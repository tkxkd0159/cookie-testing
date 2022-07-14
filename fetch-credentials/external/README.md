# Setting

```sh
npm i http-server
npx http-server # check my another ip for testing (except 127.0.0.1)

# Set local certificates for https testing
# => https://github.com/FiloSottile/mkcert
sudo apt install libnss3-tools
git clone https://github.com/FiloSottile/mkcert && cd mkcert
go build -ldflags "-X main.Version=$(git describe --tags)"

mkcert -install
mkcert <target_ip>

```