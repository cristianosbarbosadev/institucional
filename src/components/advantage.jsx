import React from "react";

export const Advantage = props => {
  return (
    <div id="advantage" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Porque anunciar com a CriativBox</h2>
          <p>
            Destaque-se no mercado e impulsione seus resultados com a
            CriativBox. Aproveite todos esses serviços exclusivos para criar
            campanhas memoráveis e alcançar o sucesso desejado.{' '}
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-md-6 col-lg-4 col-sm-6 team"
                >
                  <div className="thumbnail">
                    {' '}
                    <img src={d.img} alt="..." className="advantage-img" />
                    <div className="caption">
                      <h4>{d.title}</h4>
                      <p>{d.paragraph}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
};
