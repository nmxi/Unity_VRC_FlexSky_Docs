---
sidebar_position: 2
---

import ClickableImage from '@site/src/components/ClickableImage';

# はじめに

## FlexSkyの導入フロー

<ClickableImage src="/img/FlexSky-behavior.png" alt="FlexSkyの導入フロー" />
<p style={{ textAlign: 'center' }}>FlexSkyの基本的な導入フロー</p>

1. FlexSkyのパッケージをUnityにインポートする
2. Skybox用のマテリアルまたはサンプルPrefabを用意する
3. Lighting設定に適用し、ワールド内で見え方を確認する

これらの基本セットアップを行っていきます。

## UnityプロジェクトにFlexSkyを導入

### 1. パッケージをダウンロード

1. [Booth](https://nmxi.booth.pm/)の販売ページにアクセス
2. FlexSky を購入または試用版をダウンロード
3. ダウンロードしたZIPファイルを解凍

### 2. UnityPackageのインポート

1. Unityプロジェクトを開く
2. メニューから **Assets > Import Package > Custom Package** を選択
3. 展開したunitypackage を選択
4. インポートダイアログですべてのファイルにチェックが入っていることを確認
5. **Import** ボタンをクリック

<ClickableImage src="/img/getting-started--package-import.png" alt="UnityPackageのインポート" />

インポート後は `Assets/mikinel/FlexSky` にアセット本体が展開されます。

