# MyWebsite

![Image of Me](https://i2.wp.com/www.riccardomasetti.com/wp-content/uploads/2021/03/cropped-T0HNEG8TW-W9BKCDSJY-c4fa67950590-512.png?w=512&ssl=1)

### What is this repository for? ###

#### All stuff used to build my website at [riccardomasetti.com!](http://www.riccardomasetti.com) ####

## What is needed for the website setup?

* Makefile
* Docker
* Google Cloud credentials json file
* Generate public and private key pair
* SSL certificate for browsing the website under https
* Google cloud storage bucket

# Google Cloud credentials json file
---

## Create and download json credentials file from google cloud

I've used Terraform to build mywebsite infrastructure and it requires a way to access **Google Cloud** in order to handel resources

> Follow this GCP guide to obtain your own credentials json file [credentials.json](https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account)


# Generate public and private key pair
---

## Generate ssh rsa key pair to connect the instance

```shell
ssh-keygen -t rsa -f ~/.ssh/[KEYNAME] -C [USERNAME]
```

# Makefile
---

## The Makefile collects various preset commands available for any automated process

> depends on the container you are using, some of preset commands are useful or not

### Install Terraform

> you can run all commands directly on your machine or inside your preferred running container, I used **alpine**

```shell
# installing terraform
make install-terraform

# if you prefer you can install all dependencies with one command
make install-dependencies
```

### Run IAC in safe mode __dry run__

```shell
# run init and plan without deploying any infrastructure
make terraform-dry-run-deploy
```

> __dry run deploy__ is a very safe method to understand and see what's going to happen once the IAC will be deployed


### Export th required ENV variables and deploy the infrastructure

> Replace credentials.json with file downloaded from GCP at __credentials.example.json__ inside project root or __iac__ diectory

```shell
# Set GOOGLE_CREDENTIALS env variable
# it's used by Terraform Google provider to store the state into the remote bucket
export GOOGLE_CREDENTIALS=$(pwd)/iac/credentials.json

# deploy the iac
make terraform-deploy
```

# Docker
---

## Build alpine image

```shell
docker build . -t alpine-provisioning
```

## Run the container mounted on project folder

```shell
docker run -ti -v $(pwd):/data alpine-provisioning sh
```
### Once inside the container

```shell
# entering data folder to view the makefile and project files
cd /data

# run makefile install-dependencies (Terraform as well)
make install-dependencies

# Set GOOGLE_CREDENTIALS env variable
# it's used by Terraform Google provider to store the state into the remote bucket
export GOOGLE_CREDENTIALS=/data/iac/credentials.json
```

# SSL certificate for browsing the website under https
---

I've used [Cloudflare free plan](https://www.cloudflare.com/it-it/plans/) as network accelerator, basic threats protection and SSL/TLS certifacate provider

## Follow this Cloudflare guide to obtain your own certificate for your "mywebsite"

### Activate strict mode

> [Strict mode](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes#strict)

### Obtain orign certificate

> [Origin certificate](https://developers.cloudflare.com/ssl/origin-configuration/origin-ca#deploy-an-origin-ca-certificate)

### Replace the certificates

> mywebsite/provisioning/templates/cert_private.pem.j2  
> mywebsite/provisioning/templates/orig.crt.j2

# Google cloud storage bucket
---

## How to configure remote terraform state

### Set GCP as remote state inside iac/backend.tf
    
```shell
# configure the backend iac/backend.tf
terraform {
  backend "gcs" {}
}
```

### Create a bucket on GCP and set as remote state bucket inside iac/development/development.backend
    
```shell
# configure the remote state bucket inside iac/development/development.backend
bucket  = "yourbucketname"
prefix  = "iac"
```

## How to install wordpress and belongings

[Configure nginx for wordpress](https://spinupwp.com/hosting-wordpress-yourself-nginx-php-mysql/)

## CHMOD calculator utility
[CHMOD calculator](https://chmodcommand.com/chmod-640/)

## Hot to obtain NGINX ssl config
[Mozilla SSL config generator tool](https://ssl-config.mozilla.org/)

## Enabling service account for instances
[Service account for instances](https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances)

### Do you want contact me? ###

#### riccard dot masetti dot work at gmail dot com ####