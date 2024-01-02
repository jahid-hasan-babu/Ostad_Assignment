import React from "react";

const FAQ = () => {
  return (
    <div className="w-[80%] mx-auto my-20">
      <div>
        <h1 className="text-4xl font-bold">
          Below are frequently asked questions, you may find the answer for
          yourself
        </h1>
        <p className="text-2xl my-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat
          sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper
          augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue.
          In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum
          sit amet. Nulla convallis mauris vitae congue consequat. Donec
          interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus
          iaculis euismod dui.
        </p>
      </div>
      <div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            1. Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>
              Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
              arcu vulputate, eu porttitor tellus commodo. Aliquam erat
              volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
              gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200 my-10">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            2. Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>
              Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
              arcu vulputate, eu porttitor tellus commodo. Aliquam erat
              volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
              gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            3. Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>
              Donec mattis finibus elit ut tristique. Nullam tempus nunc eget
              arcu vulputate, eu porttitor tellus commodo. Aliquam erat
              volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi
              gravida, nisi id fringilla ultricies, elit lorem eleifend lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
