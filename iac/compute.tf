// A single Google Cloud Engine instance
resource "google_compute_instance" "node1" {
  name         = "your-name-vm-${random_id.instance_id.hex}"
  machine_type = "${var.type}"
  zone         = "${var.zone}"
  tags = ["${local.tags}"]

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-9"
    }
  }

  metadata = {
    ssh-keys = "${var.ssh_user}:${var.ssh_pub_key}"
  }

  network_interface {
    network = google_compute_network.vpc_your_name_network.self_link
    access_config {
      network_tier = "PREMIUM"
      // Include this section to give the VM an external ip address
    }
  }
}