import React, { useState } from 'react';

const About = () => {
    const [visible, setVisible] = useState([false, false, false, false])

    const handleClick = (index: number) => {
        const newVisible = [...visible];
        newVisible[index] = !newVisible[index];
        setVisible(newVisible);
      };

      const introductions = [
        {
          title: "재사용 가능한 코드 작성",
          content:
            "관심이 많습니다. 다양한 상황에서 유연하게 코드를 활용하여 효율적이고 유지보수가 용이한 코드를 작성하는 것을 목표로 하고 있습니다.",
        },
        {
          title: "시맨틱한 태그와 BEM 방법론",
          content:
            "사용에 노력하고 있습니다. 의미 있는 태그를 선택하여 웹 문서의 구조를 명확하게 표현하고, BEM (Block Element Modifier) 방법론을 활용하여 일관성 있는 스타일링을 적용하려고 노력하고 있습니다.",
        },
        {
          title: "지식 습득과 내 것으로 만들기",
          content:
            "다른 사람으로부터 배우는 것을 즐깁니다. 새로운 기술이나 도구에 대해 호기심을 갖고 학습하며, 모르는 부분은 꼭 배워서 내 것으로 만들기를 좋아합니다.",
        },
        {
          title: "다른 직군과의 소통",
          content:
            "웹 개발은 다양한 직군과의 협업이 필요합니다. 다른 직군과 소통하며 의견을 나누고 협력하여 좋은 결과물을 만들어내는 것을 좋아합니다.",
        },
      ];

    return (
        <div>
             {introductions.map((item, index) => (
        <div key={index}>
          <button onClick={() => handleClick(index)}>{item.title}</button>
          {visible[index] && <p>{item.content}</p>}
        </div>
      ))}
        </div>
    );
};

export default About;