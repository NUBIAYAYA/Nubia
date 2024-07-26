function registrar() {
    const Document Type = document.getElementById("Document Type").value;
    const Document Number = document.getElementById("Document Number").value;
    const Name = document.getElementById("Name").value;
    const Surnames = document.getElementById("Surnames").value;
    const Email = document.getElementById("Email").value;
    const Phone = document.getElementById("Phone").value;
    const Birth date= document.getElementById("Birth date").value;
    const dataUsuario = {
        Document Type :Document Type,
        Document Number : Document Number,
        Name : Name,
        Surnames : Surnames,
        Email : Email,
        Phone: Phone,
        Birth date : Birth date,
 };
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    usuarios.push(dataUsuario);
  
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
    alert("datos registrados correctamente");
  }