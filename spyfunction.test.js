test('spying on a method of an object', () => { 
    const video={
        play(){
            return true;
        },
    };

    const spy=jest.spyOn(video, 'play');
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
 })