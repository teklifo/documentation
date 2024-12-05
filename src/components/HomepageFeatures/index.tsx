import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  image: {
    light: string;
    dark: string;
  };
  description: JSX.Element;
};

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <ThemedImage
          className={styles.featureSvg}
          role="img"
          sources={{
            light: useBaseUrl(image.light),
            dark: useBaseUrl(image.dark),
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const FeatureList: FeatureItem[] = [
    {
      title: "Запросы цен",
      image: {
        light: "/img/light/document.svg",
        dark: "/img/dark/document.svg",
      },
      description: (
        <>
          Публикуйте запросы цен на товары, по которым вы хотите собрать
          коммерческие предложения, указав их количество, предпочитаемые цены, а
          также требуемую дату доставки.
        </>
      ),
    },
    {
      title: "Коммерческие предложения",
      image: {
        light: "/img/light/handshake.svg",
        dark: "/img/dark/handshake.svg",
      },
      description: (
        <>
          Отправляйте коммерческие предложения клиентам в ответ на их запросы.
        </>
      ),
    },
    {
      title: "Сравнение предложений",
      image: {
        light: "/img/light/chart.svg",
        dark: "/img/dark/chart.svg",
      },
      description: (
        <>
          Сравните полученные предложения в разрезе каждой из товарных позиций
          по целому ряду критериев. Используйте LLM модель для быстрого анализа
          полученных предложений.
        </>
      ),
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
