describe 'Index Page', type: :feature do
    before do 
        visit '/'
    end

    it 'displays project list' do
        expect(page).to have_css '.projects'        
        within '.projects' do
            expect(page).to have_content 'My First Website'
            expect(page).to have_content 'FizzBuzz'
        end
    end
end