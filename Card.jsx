import React from 'react';

/**
 * Простейший пример JSX-компонента Card.
 * Никаких createElement / Next / TS — чистый JSX.
 */
export function Card(props) {
  return (
    <div className={`card-${props.back} flex jcc aic h-480`}>
      <div>
        <img
          src={props.icon}
          alt={props.sub}
          width={props.width}
          height={props.height}
        />
        <h5 className={`title-mini mt-3 w-40 ma c-${props.textColor}`}>
          {props.desc}
        </h5>
        <h3 className={`title-card c-${props.titleColor} my-3`}>
          {props.title}
        </h3>
        <p className={`text-card w-60 mb-4 ma c-${props.textColor} mb-2`}>
          {props.sub}
        </p>
        {props.buttonColor && (
          <a
            href={props.link}
            className={`button small c-white bg-${props.buttonColor}`}
            target={
              props.link !== '/for-business' && props.link !== '#offer'
                ? 'blank'
                : '_self'
            }
          >
            {props.text}
          </a>
        )}
      </div>
    </div>
  );
}
