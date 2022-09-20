resource "google_compute_network" "vpc_your_name_network" {
  name                    = "your-name-network-${var.environment}"
  auto_create_subnetworks = "true"
}