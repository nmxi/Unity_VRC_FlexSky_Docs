---
title: 空の演出作成
---

import ClickableImage from '@site/src/components/ClickableImage';

FlexSkyは、時間帯の切り替えや色味の変化をアニメーションで制御できます。これらの仕組みを活用することで、空の演出を自然に切り替えることが可能になります。

<ClickableImage src="/img/teleport-wait.png" alt="空の演出に関する設定パネルの例" />
<p style={{ textAlign: 'center' }}>アニメーションのトリガー設定例</p>

<ClickableImage src="/img/entrance-room-performance-sample.png" alt="空の演出例" />
<p style={{ textAlign: 'center' }}>サンプルプリセットで演出を行っている例</p>

## アニメーションのトリガーを発火する

FlexSkyの管理コンポーネントには、アニメーションのトリガーを発火するための設定があります。これにチェックを入れることで、Animatorの設定UIが表示されます。
- 対象のAnimator : パラメータの発火を行う対象のAnimator
- トリガー名 : Animatorに予め設定されたトリガーパラメータ名

<ClickableImage src="/img/interact-event-to-invoke-animator-trigger.png" alt="アニメーションのトリガー設定" />

以下の画像は、トリガーが発火後、空の色味が切り替わるAnimatorのサンプルです。

<ClickableImage src="/img/sample-animator.png" alt="演出用Animatorのサンプル" />

`Invoke`という名前のトリガーを受け取ったら、アニメーションが切り替わり、空の演出が始まるといった実装が可能です。

この様に作成したAnimatorを対象のAnimatorに設定することで、トリガー発火時にアニメーションの再生が可能になります。

## 演出のタイミング調整

遅延時間を設定することでアニメーションの再生を待機し、適切なタイミングで空の切り替えを行えるようになります。

<ClickableImage src="/img/teleport-wait-setting-field.png" alt="遅延設定を行ったAnimatorの例" />
