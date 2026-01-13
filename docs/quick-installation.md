---
sidebar_position: 3
---

import ClickableImage from '@site/src/components/ClickableImage';

# クイックインストール

FlexSkyを短時間で導入するためのガイドです。既存ワールドの空の雰囲気を、最小限の操作で整えることを目的にしています。

<ClickableImage src="/img/FlexSky-quick-install-overview.png" alt="FlexSky クイックインストールの概要" />

<p style={{ textAlign: 'center' }}>クイックインストール時のサンプル見た目</p>

## 導入手順

### 1. パッケージのインポート

1. [Booth](https://nmxi.booth.pm/)から `FlexSky` の unitypackage をダウンロードします。
2. Unity プロジェクトで **Assets > Import Package > Custom Package** を選択します。
3. ダウンロードした unitypackage を指定してインポートします。

### 2. サンプルの適用

`Assets/mikinel/FlexSky` 内のサンプルPrefabまたはマテリアルをシーンに配置・適用します。

<ClickableImage src="/img/FlexSky-prefab-in-scene.png" alt="FlexSky サンプル配置例" />

### 3. Lighting設定でSkyboxを指定

LightingウィンドウでSkyboxにFlexSkyのマテリアルを設定します。これで空の描画が切り替わります。

<ClickableImage src="/img/FlexSky-first-spawn-room.png" alt="Skybox設定の例" />

### 4. パラメータの調整

マテリアルの色味や明るさ、雲量などを調整します。

<ClickableImage src="/img/FlexSky-main-area-spawn-point.png" alt="FlexSkyパラメータ調整の例" />

### 5. ワールドのアップロードと動作確認
VRChatランタイム上で空の見え方を確認できたら、導入完了です。
