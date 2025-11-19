 function redirectWhatsApp() {
            const numero = "5599999999999"; 
            const mensagem = encodeURIComponent("Olá! Gostaria de saber mais sobre os treinos.");
            window.location.href = `https://wa.me/${numero}?text=${mensagem}`;
        }