// Configure the Google Cloud provider
provider "google" {
  credentials = "${file("credentials.json")}"
  project     = "${var.project_name}"
  region      = "${var.zone}"
}