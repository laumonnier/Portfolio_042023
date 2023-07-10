// // For the skills animations
// const ratioSkills = 0.3;
// const optionsSkills = {
//     root: null,
//     rootMargin: '0px',
//     threshold: ratioSkills,
// }

// const handleIntersectSkills = function(entries, observer) {
//     entries.forEach(function(entry) {
//         if (entry.intersectionRatio > ratioSkills) {
//             entry.target.classList.add('reveal-animation');
//             observer.unobserve(entry.target);
//         }
//     });
// }

// document.documentElement.classList.add('reveal-loaded');
// const observerSkills = new IntersectionObserver(handleIntersectSkills, optionsSkills);
// observerSkills.observe(document.querySelector('.reveal'));

// const ratioSkillsText = 0.5;
// const optionsSkillsText = {
//     root: null,
//     rootMargin: '0px',
//     threshold: ratioSkillsText,
// }

// const handleIntersectSkillsText = function(entries, observer) {
//     entries.forEach(function(entry) {
//         if (entry.intersectionRatio > ratioSkillsText) {
//             entry.target.classList.add('appear-animation');
//             observer.observe(entry.target);
//         }
//     });
// }

// const observerSkillsText = new IntersectionObserver(handleIntersectSkillsText, optionsSkillsText);
// observerSkillsText.observe(document.querySelector('.appear'));