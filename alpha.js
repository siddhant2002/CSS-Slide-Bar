const inputs = document.querySelectorAll('.controls input');
function handle()
{
    const suf = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suf);
}
inputs.forEach(input => input.addEventListener('mousemove',handle));
inputs.forEach(input => addEventListener('change',handle));