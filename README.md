#Tokyo Technical Samruai Official WebPage

##For Web Developer

このサイトは[haml](http://haml.info/)を利用して作られています。

直接htmlファイルを弄るのもありかもしれませんが、hamlを利用してWebサイトを開発したほうがきっと楽に作ることが出来るはずです。

###How to Use This Repository (Linux, OS X)

1. Install ruby 

Rubyをインストールする手段は様々ありますが,私はrbenvをオススメします。詳しくは検索をかけるなどしてみてください。

2. Install Bundler

```sh
gem install bundler
```

3. clone This repository and Install Haml!

```
git clone git@github.com:tokyotechnicalsamurai/tokyotechnicalsamurai.github.io.git
cd tokyotechnicalsamurai.github.io
bundle install
```

###How to Use This Repository (Windows)

TODO!

###How to compile hamlfile to html

```
haml -q ~.haml ~.html
```

##License

The MIT License

&copy; @2014-2015 Kasai Nobuhiro([sh4869](http://sh4869.net))
