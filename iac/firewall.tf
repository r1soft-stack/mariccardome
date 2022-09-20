resource "google_compute_firewall" "your_name_firewall" {
  name    = "YourNAME-firewall-${var.environment}"
  network = google_compute_network.vpc_your_name_network.name
  description = "YourNAME website firewall rules"

  allow {
    protocol = "tcp"
    ports    = ["22", "443"]
  }

  source_ranges = "${var.cloudflare_ip}"
  target_tags = ["${local.tags}"]
}