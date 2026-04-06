export interface SlideContent {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  code?: string;
  type: 'intro' | 'content' | 'code' | 'lab';
}

export const slides: SlideContent[] = [
  {
    id: 1,
    title: "Clase 4: Configuración de Terraform",
    subtitle: "Documentación y Tutoriales - Guía Completa",
    content: ["Terraform Branding", "UX-Focused Learning Experience"],
    type: 'intro'
  },
  {
    id: 2,
    title: "Tabla de Contenidos",
    content: [
      "1. Bloques resource y data",
      "2. Atributos y referencias",
      "3. Variables y outputs",
      "4. Tipos complejos",
      "5. Expresiones y funciones",
      "6. Dependencias de recursos",
      "7. Validación personalizada",
      "8. Datos sensibles y Vault"
    ],
    type: 'content'
  },
  {
    id: 3,
    title: "4a: Bloques Resource y Data Sources",
    content: [
      "Resource: Crea y gestiona infraestructura.",
      "Data Source: Consulta información existente.",
      "Ejemplo: AWS EC2 Instance vs existing VPC."
    ],
    code: `resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t3.micro"
}

data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical
}`,
    type: 'code'
  },
  {
    id: 4,
    title: "4b: Referencias y Dependencias",
    content: [
      "Referencias a atributos para crear dependencias implícitas.",
      "Terraform construye un grafo de dependencias automáticamente."
    ],
    code: `resource "aws_security_group" "allow_tls" {
  name        = "allow_tls"
  vpc_id      = aws_vpc.main.id # Dependencia implícita
}`,
    type: 'code'
  },
  {
    id: 5,
    title: "4c: Variables y Outputs",
    content: [
      "Input variables para parametrizar.",
      "Outputs para exponer datos útiles."
    ],
    code: `variable "instance_count" {
  type    = number
  default = 2
}

output "public_ip" {
  value = aws_instance.web[*].public_ip
}`,
    type: 'code'
  },
  {
    id: 6,
    title: "4d: Tipos Complejos",
    content: [
      "list, map, object, tuple.",
      "Permiten configuraciones estructuradas y escalables."
    ],
    code: `variable "user_config" {
  type = object({
    name = string
    age  = number
    tags = list(string)
  })
}`,
    type: 'code'
  },
  {
    id: 7,
    title: "4e: Expresiones y Funciones",
    content: [
      "Condicionales: condition ? true_val : false_val",
      "For expressions y splat (*) operator.",
      "Funciones built-in: lookup, templatefile, etc."
    ],
    code: `resource "aws_instance" "server" {
  count = var.is_prod ? 3 : 1
  tags  = {
    Name = "Server-\${count.index}"
  }
}`,
    type: 'code'
  },
  {
    id: 8,
    title: "4f: Dependencias de Recursos",
    content: [
      "Implícitas: Referencias directas.",
      "Explícitas: Uso de depends_on para dependencias ocultas."
    ],
    code: `resource "aws_s3_bucket" "example" {
  bucket = "my-unique-bucket"
  depends_on = [aws_iam_role_policy.example]
}`,
    type: 'code'
  },
  {
    id: 9,
    title: "4g: Validación con Condiciones Personalizadas",
    content: [
      "validation block en variables.",
      "preconditions y postconditions en recursos.",
      "check blocks para validación continua."
    ],
    code: `variable "image_id" {
  type = string
  validation {
    condition     = can(regex("^ami-", var.image_id))
    error_message = "The image_id must start with 'ami-'."
  }
}`,
    type: 'code'
  },
  {
    id: 10,
    title: "4h: Datos Sensibles y Vault",
    content: [
      "Variables sensitive = true.",
      "Integración con HashiCorp Vault y AWS Secrets Manager."
    ],
    code: `variable "db_password" {
  type      = string
  sensitive = true
}

data "vault_generic_secret" "db" {
  path = "secret/db"
}`,
    type: 'code'
  },
  {
    id: 11,
    title: "Resumen de Mejores Prácticas",
    content: [
      "Usar data sources para infraestructura compartida.",
      "Validar entradas proactivamente.",
      "Tipos complejos para evitar repetición.",
      "Gestión segura de secretos (no hardcode)."
    ],
    type: 'content'
  },
  {
    id: 12,
    title: "Laboratorio Práctico: Ejercicios Hands-On",
    content: [
      "1. Crear VPC con subnets usando variables.",
      "2. Configurar dependencias entre recursos.",
      "3. Implementar validaciones personalizadas.",
      "4. Gestionar secretos con Vault."
    ],
    subtitle: "terraform init | terraform plan | terraform apply",
    type: 'lab'
  }
];
