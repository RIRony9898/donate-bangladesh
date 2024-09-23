document.getElementById('btn-history').addEventListener('click', function(){
    document.getElementById('section-cards').classList.add('hidden');
    document.getElementById('btn-history').classList.add('bg-[#B4F461]','border-none');
    document.getElementById('btn-donation').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-donation').classList.add('text-[#111111B3]', 'border-[#1111114D]');
    //section history
    
})

document.getElementById('btn-donation').addEventListener('click', function(){
    document.getElementById('section-cards').classList.remove('hidden');
    document.getElementById('btn-donation').classList.add('bg-[#B4F461]','border-none');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.add('text-[#111111B3]', 'border-[#1111114D]');
})