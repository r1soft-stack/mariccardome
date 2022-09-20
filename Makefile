.PHONY: all

install-dependencies: install-terraform

# We use bashisms so this ensures stuff works as expected
SHELL := sh -l

# GLOBAL VARS
ENVIRONMENT_NAME ?= development
VAULT_PASSWORD_FILE ?= ./.vault_pass
PYTHON_VERSION ?= 'ansible_python_interpreter=/usr/bin/python3'

ansible-wordpress:
	cd provisioning && ansible-playbook -i inventory main.yml --vault-password-file ${VAULT_PASSWORD_FILE} -e ${PYTHON_VERSION}

install-terraform:
	curl -Lo tfzip https://releases.hashicorp.com/terraform/0.12.10/terraform_0.12.10_linux_amd64.zip \
		&& unzip tfzip \
		&& chmod +x terraform \
		&& mv ./terraform /usr/local/bin/terraform \
		&& rm -rf tfzip tf

terraform-init:
	# rm -rf iac/tfplan iac/.terraform/
	cd iac && terraform init --backend-config=${ENVIRONMENT_NAME}/${ENVIRONMENT_NAME}.backend

terraform-plan:
	cd iac && terraform plan \
		--var-file=${ENVIRONMENT_NAME}/${ENVIRONMENT_NAME}.tfvars -out=tfplan

terraform-apply:
	cd iac && terraform apply tfplan

terraform-dry-run-deploy:
	make terraform-init
	make terraform-plan

terraform-deploy:
	make terraform-init
	make terraform-plan
	make terraform-apply

terraform-destroy:
	cd iac && terraform destroy -auto-approve --var-file=${ENVIRONMENT_NAME}/${ENVIRONMENT_NAME}.tfvars

stack-deploy:
	make terraform-deploy
	make ansible-wordpress