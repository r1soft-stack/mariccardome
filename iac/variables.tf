// variable "bucket" {}

variable "environment" {}

variable "srv_name" {}

variable "ssh_user" {
  type = "string"
}

variable "ssh_pub_key" {
  type = "string"
}

variable "disk_size" {
  type = "string"
}

variable "tags" {
  type = "string"
}

variable "zone" {
  type = "string"
  default = "europe-west1-b"
}

variable "type" {
  type = "string"
}

variable "project_name" {
  type = "string"
  default = "your-gcp-project-112211"
}

variable "cloudflare_ip" {
  type = list(string)
  default = [
    "165.225.202.90/32",
    "173.245.48.0/20",
    "103.21.244.0/22",
    "103.22.200.0/22",
    "103.31.4.0/22",
    "141.101.64.0/18",
    "108.162.192.0/18",
    "190.93.240.0/20",
    "188.114.96.0/20",
    "197.234.240.0/22",
    "198.41.128.0/17",
    "162.158.0.0/15",
    "104.16.0.0/12",
    "172.64.0.0/13",
    "131.0.72.0/22"
  ]
}

variable "storage_bucket" {
  type = "string"
}