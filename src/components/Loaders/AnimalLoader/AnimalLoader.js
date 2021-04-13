import React, { useEffect, useRef } from 'react';
import { ReactComponent as Loader } from '../../../assets/catAndDogLoader/Loader_Animal_Sheltercat_dog.svg';
import styled from 'styled-components';
import gsap from 'gsap';

const StyledLoader = styled(Loader)`
  height: 50%;
  width: auto;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const AnimalLoader = () => {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const cat = elements.getElementById('Cat');
    const leaf1 = elements.getElementById('Leaf1');
    const leaf2 = elements.getElementById('Leaf2');
    const leaf3 = elements.getElementById('Leaf3');
    const leaf4 = elements.getElementById('Leaf4');
    const flower = elements.getElementById('Flower');
    const worsted = elements.getElementById('Worsted');
    const dog = elements.getElementById('Dog');
    const bone = elements.getElementById('Bone');
    gsap.set(cat, { autoAlpha: 0 });
    gsap.set(dog, { autoAlpha: 0 });
    gsap.set(bone, { autoAlpha: 0 });
    gsap.set(leaf1, { transformOrigin: '10% 100%' });
    gsap.set(leaf2, { transformOrigin: '10% 100%' });
    gsap.set(leaf3, { transformOrigin: '10% 100%' });
    gsap.set(leaf4, { transformOrigin: '10% 100%' });
    gsap.set(flower, { transformOrigin: '80% 100%' });
    gsap.set(worsted, { autoAlpha: 0 });
    const timeline = gsap.timeline({ defaults: { ease: 'power1.inOut' } });
    timeline
      .fromTo(leaf1, { scaleY: 0 }, { duration: 0.5, scaleY: 1, autoAlpha: 1 })
      .fromTo(leaf2, { scaleY: 0 }, { duration: 0.5, scaleY: 1, autoAlpha: 1 })
      .fromTo(leaf3, { scaleY: 0 }, { duration: 0.5, scaleY: 1, autoAlpha: 1 })
      .fromTo(leaf4, { scaleY: 0 }, { duration: 0.5, scaleY: 1, autoAlpha: 1 })
      .fromTo(flower, { scaleY: 0 }, { duration: 0.5, scaleY: 1, autoAlpha: 1 })
      .fromTo(
        cat,
        { x: '+=10', y: '+=10' },
        { duration: 0.6, x: '+=10', y: '-=10', autoAlpha: 1 }
      )
      .fromTo(dog, { y: '-=5' }, { duration: 0.6, y: '-=15', autoAlpha: 1 })
      .fromTo(worsted, { y: '-=20' }, { duration: 0.5, y: '+=5', autoAlpha: 1 })
      .to(bone, { autoAlpha: 1 });
    timeline.repeat(-1).repeatDelay(1.2);
  });
  return (
    <div ref={wrapper}>
      <StyledLoader />
    </div>
  );
};

export default AnimalLoader;
