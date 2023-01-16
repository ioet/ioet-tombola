install:
	multipass launch -n tombola --cloud-init ./cloud-config.yaml --verbose --mount $$(pwd)/../:/home/dev/codebase --mount $$HOME/.ssh:/home/dev/.ssh

uninstall:
	multipass stop tombola
	multipass delete tombola
	multipass purge

shell:
	multipass exec --working-directory="/home/dev" tombola -- sudo -H -u dev zsh
