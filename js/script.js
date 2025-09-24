const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || ''; //suffix is object with all data atributes
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //this.name is name of data attribute

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));