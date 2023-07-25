const projectDetails = [
  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> <br/>
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer
      took a galley of type and scrambled it 1960s.Lorem Ipsum han printer took a galley of type
      and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: './images/dektop-images/nature.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/My-Porforlio/',
    linkToSource: 'https://github.com/Kwamay/My-Porforlio',
    name: 'Tonic',
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> <br/>
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer
      took a galley of type and scrambled it 1960s.Lorem Ipsum han printer took a galley of type
      and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: './images/dektop-images/art.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/My-Porforlio/',
    linkToSource: 'https://github.com/Kwamay/My-Porforlio',
    name: 'Multi-Post-Stories',
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> <br/>
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer
      took a galley of type and scrambled it 1960s.Lorem Ipsum han printer took a galley of type
      and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: './images/dektop-images/display-pic.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/My-Porforlio/',
    linkToSource: 'https://github.com/Kwamay/My-Porforlio',
    name: 'Facebook 360',
  },

  {
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> <br/>
      Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer
      took a galley of type and scrambled it 1960s.Lorem Ipsum han printer took a galley of type
      and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
    featureImage: './images/dektop-images/avail.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    linkToLiveSection: 'https://kwamay.github.io/My-Porforlio/',
    linkToSource: 'https://github.com/Kwamay/My-Porforlio',
    name: 'Uber Navigation',
  },
];

// here this is a clickProjectListener for your desktop version.
const clickProjectListener = (index) => {
  // before show, set the modal details
  const topic = document.querySelector('.pop-up-topic'); //
  topic.innerHTML = projectDetails[index].name;

  const image = document.querySelector('.pop-up-img');
  image.src = projectDetails[index].featureImage;
  const text = document.querySelector('.pop-up-text');
  text.innerHTML = projectDetails[index].description;
  // see live
  const seeLive = document.querySelector('.see-live');
  seeLive.addEventListener('click', () => window.open(projectDetails[index].linkToLiveSection, '_blank'));
  const seeSource = document.querySelector('.see-source');
  seeSource.addEventListener('click', () => window.open(projectDetails[index].linkToSource, '_blank'));
  // technologies
  const techParent = document.querySelector('.pop-tech');
  techParent.innerHTML = '';
  projectDetails[index].technologies.forEach((td) => {
    const list = document.createElement('li');
    list.textContent = td;
    list.classList = 'pop-up-tech-type';
    techParent.appendChild(list);
  });
  // open modal
  document.querySelector('.project-details-modal').classList.toggle('show');
};

const desktopButtons = document.querySelectorAll('.see-project-desktop');
desktopButtons.forEach((desktopButton, index) => {
  desktopButton.addEventListener('click', () => clickProjectListener(index));
});

// close modal
const closeModal = document.querySelector('.close-modal');
closeModal.addEventListener('click', () => document.querySelector('.project-details-modal').classList.toggle('show'));
