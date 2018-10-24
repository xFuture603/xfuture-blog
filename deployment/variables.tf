variable "aws_region" {
  description = "The AWS region to deploy into (default: us-west-2)."
  default     = "us-west-2"
}

variable "blog_url" {
  description = "The url for the blog (i.e.: xfuture-blog.com)"
  default     = "xfuture-blog.com"
}

variable "acm_certificate_arn" {
  description = "ARN for the AWS Certificate Manager SSL certificate"
  default     = ""
}