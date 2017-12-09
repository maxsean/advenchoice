OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '57413524631-gs7ckbp8ht0c3vot5p3vk09kfeqqbp1a.apps.googleusercontent.com', 'mQiuuK6_rcjjKVja4QAmFBic', scope: 'email,profile'
end
