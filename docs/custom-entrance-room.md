---
sidebar_position: 6
title: カスタムプリセットの作成
---

import ClickableImage from '@site/src/components/ClickableImage';

## 1.空のGameObjectの作成

シーン上に新規GameObjectを追加します。Hierarchyの空白を右クリック→Create Emptyを選択します。GameObjectは適宜わかり易い名前に変えておきます。

<ClickableImage src="/img/create-empty-gameobject.gif" alt="Hierarchyで空のGameObjectを作成している様子" />

## 2.FlexSkyコンポーネントの追加

1で作成した空のGameObjectにFlexSky用の管理コンポーネント（名称はアセット内のものに合わせてください）を追加します。

<ClickableImage src="/img/add-entrance-room-component.gif" alt="FlexSkyコンポーネントを追加している様子" />

## 3.GameObjectの位置調整

プレビューしやすい位置に移動しておきます。画像ではY=1100に設定しています。

<ClickableImage src="/img/move-custom-entrance-room-root.png" alt="FlexSkyルートの位置を調整している様子" />

:::caution
原点から極端に離れた場所（例: X=10,000）への配置は避けることを推奨します。精度の限界による描画の乱れが発生する場合があります。
:::

## 4.プレビュー用メッシュの追加

1で作成したオブジェクトの子階層にスカイドームやプレビュー用のメッシュを追加します。ここにはお好みのメッシュデータを配置してください。

<ClickableImage src="/img/add-custom-entrance-room-mesh.png" alt="プレビュー用メッシュを追加している様子" />

:::tip ヒント
必要に応じてUIや操作ガイドを追加してください。`Assets/mikinel/FlexSky/Prefabs/_Internal` にサンプルUIがある場合はそれを利用できます。
:::

<ClickableImage src="/img/sample-ui.png" alt="サンプルUI" />
<p style={{ textAlign: 'center' }}>サンプルUI Prefab</p>

## 5.マテリアルの作成と適用

FlexSkyのShaderを使用したマテリアルを作成し、4で追加したメッシュに割り当てます。

<ClickableImage src="/img/add-spawn-point-data-prefab.png" alt="FlexSkyマテリアルを割り当てている様子" />

## 6.プリセット管理オブジェクトの作成

1で作成したオブジェクトの子階層に空のGameObjectを作成します。ここではプリセット管理用のオブジェクトとして使用します（任意）。

<ClickableImage src="/img/add-access-controller-component.png" alt="プリセット管理オブジェクトを追加している様子" />

## 7.切り替え用のオブジェクトの追加

プリセットを切り替えるためのオブジェクトを作成します。ここでは単純なCubeオブジェクトを追加しました。必要に応じてコライダーを追加し、操作できる状態にします。

<ClickableImage src="/img/add-interaction-cube.png" alt="切り替え用キューブを追加している様子" />

:::caution
操作用のコンポーネントは、コライダーが付与されたオブジェクトに追加してください。
:::

## 8.参照設定

6で追加したプリセット管理オブジェクトに、7で追加した切り替え用オブジェクトを設定します。

<ClickableImage src="/img/set-field-interact-to-event-component.gif" alt="プリセット管理オブジェクトに参照を設定している様子" />

## 9.FlexSkyコンポーネントの参照設定

1で作成したオブジェクトを選択し、FlexSkyコンポーネントの関連フィールド（項目名はアセット内のものに合わせてください）に、4~8の手順で作成したものを全て設定します。
- 4で作成したプレビュー用メッシュのルートオブジェクト
- 5で作成したマテリアル
- 6で作成したプリセット管理オブジェクト

<ClickableImage src="/img/set-custom-entrance-room-fields.gif" alt="FlexSkyコンポーネントに各オブジェクトを設定している様子" />

また、空の見え方が強すぎる場合は強度や露出の値を調整してください。

<ClickableImage src="/img/adjust-entrance-room-padding.gif" alt="強度パラメータを調整している様子" />

## 10.動作確認

完成です。動作チェックを行います。

<ClickableImage src="/img/check-custom-entrance-room.gif" alt="カスタムプリセットの動作を確認している様子" />
