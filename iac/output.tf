output "ip" {
  value = google_compute_instance.node1.network_interface.0.access_config.0.nat_ip
}

output "gcs_account_storage" {
  value = data.google_storage_project_service_account.gcs_account.email_address
}

output "default_compute_account" {
  value = data.google_compute_default_service_account.default.email
}