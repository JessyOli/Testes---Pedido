const btnNao = document.getElementById('nao');
btnNao.addEventListener('mouseover' , () => {
    const randomY = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    const randomX = Math.random() * (window.innerWidth - btnNao.offsetWidth);

    btnNao.style.left = `${randomX}px`;
    btnNao.style.top = `${randomY}px`;
});

   const btnSim = document.getElementById('sim');
    btnSim.addEventListener('click', () => {
        alert("Eu sabia que você aceitaria!!");
    });


      





