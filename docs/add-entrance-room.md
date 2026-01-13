---
sidebar_position: 5
---

import ClickableImage from '@site/src/components/ClickableImage';

# プリセットの配置

FlexSkyのプリセットは、空の色味や雰囲気を素早く切り替えるためのセットです。ワールドの世界観に合わせた空を簡単に選べます。

プリセットの適用方法は2通りあります。
1. サンプルのプリセットを使用する
2. カスタムのプリセットを使用する（<span style={{ color: '#d9534f' }}>自由に調整できるが調整項目が多め</span>）

まず最小限に雰囲気を整える場合は、サンプルのプリセットを使用することを推奨します。

## 1.サンプルのプリセットを使用する場合

`Assets/mikinel/FlexSky` ディレクトリには、予め用意されたプリセットのサンプルが含まれています。サンプルを適用することで、細かな調整を行わずにFlexSkyの雰囲気を確認できます。

### サンプルプリセット一覧

<div className="row sample-room-gallery">
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/FlexSky-room-sample-1.png" alt="FlexSky Sample1" />
    <p className="sample-room-gallery__caption"><strong>Sample1 preset</strong><br />晴天寄りのニュートラル</p>
  </div>
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/FlexSky-room-sample-2.png" alt="FlexSky Sample2" />
    <p className="sample-room-gallery__caption"><strong>Sample2 preset</strong><br />夕景寄りのトーン</p>
  </div>
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/FlexSky-room-sample-3.png" alt="FlexSky Sample3" />
    <p className="sample-room-gallery__caption"><strong>Sample3 preset</strong><br />夜空寄りのコントラスト</p>
  </div>
  <div className="col col--3 sample-room-gallery__item">
    <ClickableImage src="/img/FlexSky-room-sample-4.png" alt="FlexSky Sample4" />
    <p className="sample-room-gallery__caption"><strong>Sample4 preset</strong><br />雲量が多めの雰囲気</p>
  </div>
</div>

<ClickableImage src="/img/FlexSky-entrance-room-sample-prefabs.png" alt="FlexSky サンプル一覧" />
<p style={{ textAlign: 'center' }}>Assets/mikinel/FlexSky 内のサンプル一覧</p>
### プリセットの追加
<ClickableImage src="/img/sample-entrance-room-add.png" alt="Sampleプリセットを適用する方法" />
<p style={{ textAlign: 'center' }}>サンプルプリセットを適用する様子</p>

:::caution 注意
同時に複数のSkyboxマテリアルを適用しないようにしてください。空の表現が意図せず切り替わる場合があります。
:::

<ClickableImage src="/img/first-room-entrance-room-overlap.png" alt="Skyboxの設定が競合している例" />
<p style={{ textAlign: 'center' }}>設定が競合してしまっているダメな例</p>

### 色味の調整

シーンに配置したサンプルプリセットは、マテリアルのパラメータを調整することで色味をカスタムできます。

<ClickableImage src="/img/custom-sample-entrance-room-text.png" alt="サンプルプリセットの調整例" />

## 2.カスタムのプリセットを使用する場合

独自のプリセットを作成したい場合は、応用項目内の[カスタムプリセット](custom-entrance-room.md)のページをご覧ください。
