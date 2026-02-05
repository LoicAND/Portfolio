document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('loadingScreen');
    if (!overlay) return;

    const lights = Array.from(overlay.querySelectorAll('.traffic-light'));
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let index = 0;
    const interval = setInterval(() => {
        if (index < lights.length) {
            lights[index].classList.remove('bg-gray-700');
            lights[index].classList.add('bg-red-600', 'shadow-[0_0_20px_#E10600]');
            index += 1;
            return;
        }

        clearInterval(interval);
        setTimeout(() => {
            overlay.classList.add('opacity-0');
            setTimeout(() => {
                overlay.remove();
                document.body.style.overflow = originalOverflow || '';
            }, 500);
        }, 500);
    }, 600);
});

const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const burgerIcon = document.getElementById('burgerIcon');

if (burgerBtn && mobileMenu && burgerIcon) {
    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        burgerIcon.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
    });
    
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            burgerIcon.textContent = '☰';
        });
    });
}
