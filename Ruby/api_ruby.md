### API call using ruby

instal - using brew and sett correct path in bash profile 
https://stackoverflow.com/questions/39381360/how-do-i-install-ruby-gems-on-mac

    brew install ruby
    
To instal rest-client & rest-client vs faraday (JP) is here
https://qiita.com/kazuyat/items/e8a24c6d76e5c922f630

    gem install rest-client
 

Some supportive resourse (JP)
https://www.sejuku.net/blog/16111

set this on on atop of the file

    require 'rest-client'
    
#### rest client GITHUB:
https://github.com/rest-client/rest-client/blob/master/README.md
Here is some stuff to understand the library
RestClient syntax

    RestClient.get(url, headers={})

    RestClient.post(url, payload, headers={})
    
Example 

    RestClient.post "http://example.com/resource", {'x' => 1}.to_json, {content_type: :json, accept: :json}


ARGV
https://code-maven.com/argv-the-command-line-arguments-in-ruby


Example code


    # updatecvl.rb
    #!/usr/bin/ruby

    require 'rest-client'
    require 'uri'

    # Update the uploaded VCL for a particular service and version

    # command: ruby $file_name $service_ID $version $vcl_name $key
    # ARGV[0] - update file name
    # ARGV[1] - service ID
    # ARGV[2] - version
    # ARGV[3] - existing vcl name
    # ARGV[4] - api key

    def update_vcl

        if ARGV.length < 5
            puts "Too few arguments"
            exit
        end

        puts "Working on updating VCL"

        file = ARGV[0]
        service_id = ARGV[1]
        version_no = ARGV[2]
        vcl_name = ARGV[3]
        fastly_key = ARGV[4]
        url = 'https://api.fastly.com/service/' + service_id + '/version/' + version_no + '/vcl/' + vcl_name
        header = { 'Content-Type' => 'application/x-www-form-urlencoded', 'Fastly-key' => fastly_key } 

        # encode as 'Content-Type' is 'application/x-www-form-urlencoded'
        payload = URI::encode(File.read(file))
        # payload = { 'content' => vcl_data } 

        # Error handling
        begin
            res = RestClient.put url, payload, headers = header
            puts res.code
            if res.code == 200
                puts "Updated uploaded VCL"
                puts res.body
                return true
            end

        rescue RestClient::ExceptionWithResponse => error
            puts "Error uploading VCL"
            puts error.response
            return false
        end
    end

