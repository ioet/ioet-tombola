.PHONY: test
test:
	@sudo echo "$$(./get_vm_ip) tombola-local" >> /etc/hosts

.PHONY: install
install:
	@echo
	@echo "Generating the local env machine configuration..."
	@cat ./cloud-config.template.yaml | sed -r "s/<authorized_keys>/$$(cat ~/.ssh/id_rsa.pub | sed -e 's/[]\/$*.^[]/\\&/g')/g" > cloud-config.yaml
	@echo Done

	@echo
	@echo "Launching dev env virtual machine..."
	@multipass launch -n tombola -d 10G --cloud-init ./cloud-config.yaml
	
	@echo
	@echo "Updating the ssh config file..."
	@touch -a ~/.ssh/config
	@multipass exec -d /home/dev tombola -- ./update_host "$$(cat ~/.ssh/config)" $$(./get_vm_ip) > ~/.ssh/config
	@echo Done

	@echo
	@echo "Cleaning files..."
	@rm cloud-config.yaml
	@echo Done

uninstall:
	multipass stop tombola
	multipass delete tombola
	multipass purge

stop:
	multipass stop tombola

start:
	multipass start tombola

shell:
	@ssh dev@$$(./get_vm_ip)
