# CollabField

This application comes from the [Collabfield Tutorial on FreeCodeCamp](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/)

## 01 Introduction and Setup

[Section Link](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/#so-what-is-the-app-is-going-to-be-about)

### 01.1 Prequisites

### 01.2 Setup

## 01.3 Create a new app

Commands:

```bash
rails new collabfield --database=postgresql

rails s
```

## 02 Layout

[Section Link](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/#layout)

### 02.1 Home page

- Hash symbol # in Ruby represents a method

### 02.2 Bootstrap

To add gems to your appplication, go to the Gemfile and add the gems you want, like this:

```gemfile
...
gem 'bootstrap-sass', '~> 3.3.6'
gem 'sass-rails', '>= 3.2'
```

Save the file and run this to install newly added gems:

```bash
bundle install
```

### 02.3 Navigation bar

### 02.4 Style sheets

## 03 Posts

[Section Link](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/#posts)

### 03.1 Authentication

### 03.2 Helpers

### 03.3 Testing

#### What we're using

- **Framework:** RSpec When I started testing my Rails apps, I used the default Minitestframework. Now I use RSpec. I don’t think there’s a good or a bad choice here. Both frameworks are great. I think it depends on a personal preference, which framework to use. I’ve heard that RSpec is a popular choice among Rails community, so I’ve decided to give it a shot. Now I am using it most of the time.
- **Sample data**: factory_girl Again, at first I tried the default Rails way — fixtures, to add sample data. I’ve found that it’s a different case than it is with testing frameworks. Which testing framework to choose is probably a personal preference. In my opinion it’s not the case with sample data. At first fixtures were fine. But I’ve noticed that after apps become larger, controlling sample data with fixtures becomes tough. Maybe I used it in a wrong way. But with factories everything was nice and peaceful right away. No matter if an app is smaller or bigger — the effort to set sample data is the same.
- **Acceptance tests:** Capybara By default Capybara uses rack_test driver. Unfortunately, this driver doesn’t support JavaScript. Instead of the default Capybara’s driver, I chose to use poltergeist. It supports JavaScript and in my case it was the easiest driver to set up.

#### Generate Tests

```bash
rails generate rspec:install
```

#### Running Tests

```bash
rspec spec
```

#### Run a specific Test

```bash
rspec spec/helpers/navigation_helper_spec.rb
```

### 03.4 Main feed

https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/#main-feed

### 03.5 Single post

### 03.6 Specific branches

### 03.7 Service objects

### 03.8 Create a new post

## 04 Instant messaging

[Section Link](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/#instant-messaging)

### 04.1 Private conversation

### 04.2 Contacts

### 04.3 Group conversation

### 04.4 Messenger

## 05 Notifications

[Section Link](https://www.freecodecamp.org/news/lets-create-an-intermediate-level-ruby-on-rails-application-d7c6e997c63f/#notifications)

### 05.1 Contact requests

### 05.2 Conversations
