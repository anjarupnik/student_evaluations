# Student Evaluations

Individual assignment at Codaisseur Academy.
React App for evaluating students. As user, you can add new classes,
new students, rate students for each day and ask random student a questions.

[![](http://res.cloudinary.com/mdfchucknorris/image/upload/v1511964011/Screenshot_from_2017-11-29_14-51-00_cvwlv0.png)](http://res.cloudinary.com/mdfchucknorris/image/upload/v1511964011/Screenshot_from_2017-11-29_14-51-00_cvwlv0.png)

## Steps

These are the steps I followed when working on this app:

1. Setting up project
2. Adding CarrierWave
3. Updating background color
4. Removing public uploads folder from Git
5. Updating background color AGAIN
6. Adding Cloudinary
7. Adding Image Versions

## Database Structure

1. NewsItem

  * title:string
  * sub_header:text
  * content:text
  * image:string

## Running Locally

Make sure you have [Ruby](https://www.ruby-lang.org/en/) and [Bundler](http://bundler.io/) installed.

```bash
git clone git@github.com:Codaisseur/world-of-cats-news.git
cd world-of-cats-news
bundle install
rake db:create db:migrate db:seed
rails server
```

## Related documentation

For more information about using CarrierWave and Cloudinary, see these links:

* [Codaisseur Reader](https://read.codaisseur.com/topics/day-12-file-uploads-with-carrierwave/articles/file-uploads-with-carrierwave-cloudinary)
* [CarrierWave](https://github.com/carrierwaveuploader/carrierwave)
* [Cloudinary](http://cloudinary.com/documentation/rails_integration#getting_started_guide)
