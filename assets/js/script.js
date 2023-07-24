const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  document.querySelector('.desktop').classList.toggle('show');
});

const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', () => {
  document.querySelector('.desktop').classList.toggle('show');
});

const linkButtons = document.querySelectorAll('.links');
linkButtons.forEach((linkButton) => {
  linkButton.addEventListener('click', () => {
    document.querySelector('.desktop').classList.toggle('show');
  });
});

const mobileDetails = [
  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: './images/mobile-images/pic_on_screen.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    mobileLinkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    mobileLinkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Tonic',
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: './images/mobile-images/Avail.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    mobileLinkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    mobileLinkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Mult-Post-Stories',
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: './images/mobile-images/gym.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    mobileLinkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    mobileLinkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Tonic',
  },

  {
    mobileDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent`,
    featureImageMobile: './images/mobile-images/art.png',
    mobileTechnologies: ['HTML', 'CSS', 'JavaScript'],
    mobileLinkToLiveSection: 'https://kwamay.github.io/Porfolio_Setup_Project',
    mobileLinkToSource: 'https://github.com/Kwamay/Porfolio_Setup_Project',
    mobileName: 'Multi-Post-Stories',
  },
];

const clickListener = (index) => {
  // before show, set the modal details
  const mobileTopic = document.querySelector('.pop-up-topic');
  mobileTopic.innerHTML = mobileDetails[index].mobileName;

  const imageMobile = document.querySelector('.pop-up-img');
  imageMobile.src = mobileDetails[index].featureImageMobile;

  const text = document.querySelector('.pop-up-text');
  text.innerHTML = mobileDetails[index].mobileDescription;

  // see live
  const seeLive = document.querySelector('.see-live');
  seeLive.addEventListener('click', () => window.open(mobileDetails[index].mobileLinkToLiveSection, '_blank'));

  const seeSource = document.querySelector('.see-source');
  seeSource.addEventListener('click', () => window.open(mobileDetails[index].mobileLinkToSource, '_blank'));

  // technologies
  const techParent = document.querySelector('.pop-tech');
  techParent.innerHTML = '';
  mobileDetails[index].mobileTechnologies.forEach((td) => {
    const list = document.createElement('li');
    list.textContent = td;
    list.classList = 'pop-up-tech-type';
    techParent.appendChild(list);
  });
  // open modal
  document.querySelector('.project-details-modal').classList.toggle('show');
};

const mobileButtons = document.querySelectorAll('.see-project-mobile');
mobileButtons.forEach((mobileButton, index) => {
  mobileButton.addEventListener('click', () => clickProjectListener(index));
});