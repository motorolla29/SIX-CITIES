import { func, number, shape, string } from "prop-types";
import React, { memo } from "react";

function InputStar({ data, onInput }) {
  return (
    <>
      <input
        onInput={onInput}
        className="form__rating-input visually-hidden"
        name="rating"
        value={data.ratingInt}
        id={`${data.ratingInt}-stars`}
        type="radio"
        required
        data-testid="input-star"
      />
      <label
        htmlFor={`${data.ratingInt}-stars`}
        className="reviews__rating-label form__rating-label"
        title={data.ratingStr}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

InputStar.propTypes = {
  data: shape({
    ratingInt: number.isRequired,
    ratingStr: string.isRequired,
  }),
  onInput: func.isRequired,
};

export default memo(InputStar);
