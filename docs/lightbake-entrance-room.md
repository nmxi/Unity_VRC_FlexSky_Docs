---
sidebar_position: 7
title: ライトベイクの活用
---

import ClickableImage from '@site/src/components/ClickableImage';

ライトベイクを行うことで、空の明るさとシーンのライティングが馴染みやすくなります。

<ClickableImage src="/img/light-bake-step-sample.gif" alt="ライトベイク前後の比較" />

## 1.モデルデータのContributeGIの有効化

ベイクする対象のメッシュを持つオブジェクトを全てContribute GIにチェックを入れます。

<ClickableImage src="/img/set-contribute-gi.gif" alt="Contribute GIを有効化している様子" />

## 2.ライトベイク

LightingウィンドウのGenerate Lightingボタンをクリックし、ライトベイクを行います。

<ClickableImage src="/img/light-bake-sample.png" alt="ライトベイクを実行している様子" />

:::caution
ここではライトベイクの関連の説明は行いません。別途Unityのライトベイクについて検索してみてください。
:::

## 3.ライトベイク完了

<ClickableImage src="/img/light-baked.png" alt="ライトベイク完了後のシーン" />
