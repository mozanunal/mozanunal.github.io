

title: |
  My Title
tags:
  - golang, concurrency
categories:
  - Coding

author: Mehmet Ozan Ünal
date: 2020-04-26 03:44:00
---

# Concurency Patterns In GOlang

## Concurency vs Paralelisim

I did something that we call back then parallel programming and when
I started working it go I was a little
bit confused because suddenly everybody
was talking about concurrency and it was
like yeah it's probably the same thing I
turn now that concurrency is not the
same as parallel programming or
parallelism because parallelism is about
parallel execution and concurrency is a
little bit more because concurrency is
about design it's about designing your
program as a collection of independent
processes it's about designing these
processes to eventually run in parallel
they don't have to but they can and last
but not least it's about writing your
code so that the outcome is always the
same regardless if you run it in
parallel or sequential now this is a
rather top-level view of concurrency so
let's get a little bit more into detail
this means that if you have your code
base or you have your set of problems
and you're actively looking for little
tasks that you can group and you will
run these tags alongside each other
maybe sequentially or parallel but this
grouping is quite important and it means
that your code should not have any race
conditions because race conditions by
the very nature produce an unpredictable
outcome so there is definitely a change
and almost the same is true for
deadlocks because if you have got a
deadlock then you have got no outcome at
all so definitely doesn't work and last
but not least
concurrency is also about scale so you
want to run faster when you add more
workers you certainly don't want to get
slower but this can sometimes happens if
you have a bad concurrency model and
speaking of a concurrency model we're
here for go conference so how does go
check our concurrency well Gaucho's is
quite interesting model and this model
is called commonly
cating sequential processes or CSP in
short and CSP is nothing new it's been
around since the 1970s and it's been
using a couple of languages so Oakham
Erlang so many languages use it but the
beauty about CSP is that is so very very
simple
it follows only three distinct rules and
the first one is already pretty awesome
because it says you just write your
little processes as sequential code and
this is nice because we all write
sequential code we did this for decades
we're really good at that and if you've
ever done writing parallel code in other
languages you know that there's a fair
amount of brain power going into that
because it's quite complicated to do so
and CSP says yeah forget about that just
do sequential code it's nice and the
next part is quite interesting because
it's a thing the backbone of CSP and it
says that every one of your processes
has a local state and it only operates
on that local state you don't have
shared state
no sharing at all and if you don't have
sharing you don't have deadlock you
don't have race conditions and if you
have to transfer data from run process
to the other you don't share it you
communicate it you send it over you send
a copy over from your process to the
other process so that every process can
work independently and if you follow
these two steps and scaling is quite
easy so because you scare but just
adding more of the same so you have this
process was this very fancy calculation
that takes some time yeah pull up to and
and you go routines next to it it just
works well that's nice so what is go
give us to work with concurrency and
especially to work with CSP and well
there are four tools essentially the
first one is go routines but I won't
talk about go genes today because this
is essentially talking on its own
because it's quite complicated I would
talk more about channels because they
are the backbone of CSP and if we're
talking about channels we also have to
talk about selects because this is how
you manage channels announcement release
there's this fourth point it's a sink
package and if you look at this impact
it isn't sound all like CSP there's all
these classic stuff in there like mute e
sees condition variables so why is this
even here I mean do we really need that
oh you see later so but let's first talk
about channels and to get you all under
the same roof let me explain how they
work in this sector essentially when
they were block so I like to see
channels as a kind of bucket chain you
know the thing from the medieval times
where you had like the well of water and
one side the burning building on the
other side and then the chain of little
Gophers passing along buckets eventually
proshare putting out the fire it's like
that
yeah and in this bucket chain you have
like three components you have the
sender like the go for pulling off the
water you have the receiver the go for
tossing the water into the building and
you have all these little Goofy's in
between and actually you don't really
need them so you just need the sender
and the receiver and there's pretty much
how channels work so you can just get
rid of the buffer you can add it or you
don't need it
so they are buffered and unbuffered
channels again okay and if we have this
picture in mind it's easy to see when
channels start blocking and the first
case happens when this gopher is putting
the bucket out of the wall and when
there's no one to take it so there's no
receiver are they just busier is simply
not there so you stand there we should
bucket in hand and you're waiting for
someone to take it or in other words you
block and this doesn't really change if
you have a queue up Gophers in between
you and the sender because you can pass
on the bucket to the next go friend the
chain but at some points all Gophers are
holding buckets and then it doesn't get
on so you're blocking or the sender
sides it's a little simpler because
there's just one rule no data means
blocking and this doesn't change if you
ever get a buffer before you or not if
there's the data you stop working in
you're waiting for new where data okay
this is or rather funny to look at but
let's have a look at some code so let's
create an unbuffered channel so no go in
betweens just send and receiver and
first we want to
something from the channel what happens
well of course we block because there is
no data no data always means blocking
okay away with that so we try to send
something through the channel what
happens well it blocks yes because there
is no one taking the bucket from you so
I'm standing there waiting for someone
to take my buckets so I have to block
escape ok we got it so we need a send
and a receiver so we should start a
receiver when one girl routine and then
send this is this block well a little
bit because it blocks until both
functions reach this channel operation
so it's essentially some kind of
synchronization pattern and it is what
you see something in code basis so they
use this to synchronize to go routines
to just continue at a certain point
though you can use it like that ok how
does it change when you add a buffer
well now we have one gopher in between
should be enough and we try to receive
something from the channel again what
happens it's blocking yes of course it
blocks because there is no data and if
we send something to this channel well
this time we're fine because there is a
gopher that can take our bucket and if
we send again what happens we block
again because all the Gophers are
holding buckets ok
so why am i stressing that so much why
is blocking so important well because
blocking breaks concurrency because if
you block you can have dead logs and yes
you can build that locks with channels
you can do that and we certainly wanted
to avoid that locks and we and blocking
can also lead to scaling of work
properly
like imagine you have like one receiver
and the only one and you have none
buffer channel in front now regardless
of how many senders you put in there
only one send at the time will work so
what do you create by adding more
senders you just create more overhead so
essentially and the best case you just
at the same speed with the same amount
of workers but you will eventually get
slow at some point so you don't want to
have that ok so but before we see how to
fix that
let's look at another nice property of
channels and that is closing channels
and it's not that complicated as most
people think it is because you have to
wear my man one thing closing always
generates the message and that's the
first thing and this message is
something like a little sign saying okay
there will be no more data and this sign
will just bubble through the whole chain
and at the end the receiver will see it
and say hey yeah no more data got
nothing to do and just immediately go
off it doesn't really look at this even
it will just leave the message here and
just go on play something and now if you
imagine that now it becomes apparent
what happens when you send something to
this channel that is closed your go
routine will panic and why will it panic
because you're standing there with your
bucket in hand and no one will ever take
it from you so your data is lost of
course you panic another thing is
closing always generates message closing
twice also panics now you know why okay
but how does this look like in code so
let's create a channel and unbuffered
one or buffer one doesn't matter because
we immediately close it and then we
receive which we can because closing
always generates message so what gets
printed zero a good thing yeah so if
something has to be printed and actually
there two values printed it's zero and
four so why the hell is there two values
well the first one is this closing
message and this is always the zero
value of the type of your channel so in
this case it's integer so it's zero yes
correct if you have a pointer then it's
new and so on and the second parameter
is always there we just tend to ignore
it
and this parameter is true for every
case but for the last message so you can
see either as a valid boolean so the
last message is not valid or you can see
it as a more boolean saying there is no
more data coming through but you can
always carry that and by that you can
see if the channel is closed and now you
see the receiver always knows if the
channel is closed but the sender never
does if the sender sends then the only
thing you can do is panic and that is
why you normally
only close the channel from the sending
side never from the receiving side okay
so with channels and clothes and all
these buffered things you get along
quite well so you will be great programs
with that but you will just ceiling at
some point and that normally happens
when you have more than one channel and
in that point you need something else
you need select and select it something
like a switch statement over your
channels and it really works the same
way so you have selected at the
beginning and then you have a couple of
cases you even have a default case and
each case has a channel operation so
either send or receive or you can even
mix both and the rule is the first
operation that is non-blocking will be
chosen and if all the cases are blocking
nd4 case will be chosen all right and
that's interesting because if the
default case is always chosen we can do
a nifty thing we can create and unblock
a non-blocking channel so we can write a
function like this we call it try
receive and we select door of a channel
and if the channel that contains data
will turn it immediately but if the
channel blocks then we get to the
default case and then we can return ie
this channel would be blocking so but we
directly continue so we get around the
blocking problem and you also see that
sometimes in some code places but
there's a promise that because this is a
tad unrealistic because normally you
have channels with a certain kind of
throughput so you have like a thousand
messages per second or something so you
know that for a certain time frame there
will be no message and you want to wait
for the next message to come so we can
do that too but just altering this
example a little bit and we can use a
function from the time package for that
and this function is time after and time
offer is interesting because it returns
a channel yes of course you can return a
channel why not and this channel will be
blocking immediately and it will be
blocking until the duration is over and
when it is over it was sent the time
when the channel was unblocked
so by doing this we now have a receive
with a timeout which is a lot more
realistic in cases where you have a
certain throughput okay so but doing
tricks like that is not the true power
of select because select can do more and
this becomes apparent if you see your
channels as streams of data because if
you do it like that you can see that
select is more about routing your data
along so you can define different
routing patterns you can have something
like a fan-out where you have like one
stream of data coming in and multiple
one coming out or you join multiple
streams into one that would then be a
funnel or you can just do mix and match
between reference streams and this is a
turn out they and to illustrate that
let's have a look at the easiest example
which is a fan-out and this is just it
the first thing that you do is you range
over the channel and yes you can do that
and if you do you will receive data all
the time until the channel is closed and
if it is closed then the loop will
discontinue and you won't process this
last message so it works exactly like
you would just like it to behave so
we're now receiving data and we have it
and now we can send it to one of these
two channels and that's where you select
we send it to the first channel that has
placed a waiver so that can draw data so
it's a little bit like a load balancer
that we just created and it's very
useful if you have a set of workers and
you want to choose the first wake a
worker which is a Weibull and for that
it's great okay this is very simple so
let's make that a little bit more
complicated and turn this into a turnout
and the first thing that we have to do
is to have get rid off their range
because now we have to get data from two
channels and again we can do this which
selects because select works and sending
and receiving so we receive data from
the first channel that has data and then
at the end we'll pass it over like with
it which the fan out into the first
channel that has space available so
quite simple but there is an interesting
thing in that and this is the part in
the middle the
where do we actually stop here because
there's this thing about select if you
have a closed channel in there it tends
to be chosen all the time so if you
close one channel you will always get to
that case and you'll never get to the
other channel which might still have
data so this doesn't really work and you
can't really remove a case from the
Select case I'm not easily let's say
like that so you have to think of
something else and one way how you can
do it is to use a so-called quit channel
and this is how it works so you add that
adds an additional channel and the only
reason for this channel to exist is to
be closed you don't pass any data around
it just close it and as you do you then
close the two incoming channels yeah but
now you say oh but wait a minute this is
an anti-pattern because we just said
before that the receiver should never
close yes essentially it is but in that
case it's okay because you say the
sender says quit and this is just a
delegate to close the other two so it's
a little bit around but it's okay so
once we have closed the channels we can
drain them and we can use the pattern
that we saw before because this is just
the same fan-out that were used so
selecting channels are quite powerful
and you can do and tremendous amount of
work with that I I guess like 90% of
your use cases can be covered with CSP
channels and select but sadly they are
these remaining 10% and so where do
channels fail well first off channels
can still block where we can make them
all unblocking but it's not desirable
because sometimes we want channels to
wait or we want operations to wait and
if we do then we have the same problems
as before the next thing is channels
pass around copies because remember
about the local state so you have to
pass a copy so that the local state
stays local and if you do that with for
example a two gigabyte Photoshop file
that is probably not a good idea because
it takes a fair amount of processing
power and if you now say well it just
lets pass a pointer
well that is somewhat erased conditions
through the backdoor because no one
prevents the sending go routine from
holding the same point and modifying it
afterwards and that's actually one of
the nasty bucks that we had in Gollum
it's exactly that so please don't do
that took quite some time to get rid of
that and last but not least there are
these naturally shared structures like
caches well yes you can build a cache
with a channel in front but no please
don't him it's really ugly and it
doesn't really make sense because caches
are about sharing so you have some
structures in each sharing so what we
did yeah well you remember from the one
of the first slides the same package
yeah that is what you do you choose
something like a mutex for example well
but there's a problem because mutti seas
are a little bit like toilets like no
longer you occupy them the longer the
queue in front gets so you don't really
solve the problem you just shift it to
somewhere else and this is even a little
bit worse than we have this channel say
not that good so you can mitigate this
problem by using a readwrite lock
because there the reads will be parallel
always and just the rights are blocking
but then again this only mitigates the
problem and it only works in situations
where you have a lot more reach than
rights and in the end if you start to
use mutex at some point you will have
more than one and if you have you will
get into trouble because someone will
always mess up the order if it's not you
it's someone else trust me I've been
there
so using multiple mutexes is also not
quite nice so all in long a working
solution but not really the one we're
looking for so what else can we do now
it's house to look a little bit back to
the time we're just at parallel
programming because there we defined
like three sides of code and there you
have it you have blocking coding this is
what we saw this is code that can at
some point just slog up it doesn't mean
it has to but it can so you have no
guarantee that it does not and every
time you have something like a mutex in
between then you have blocking code lock
free code and the contrast give
that guarantee that at least one part of
your program is making progress and that
is least something and then we have it's
somewhat that is the Holy Grail and that
is weight free programming but as the
same with the Holy Grail it's very hard
to achieve that so we have to have a
fair amount of brainpower to get there
and just that is a side note so if you
think that going down this list equals
faster you know it is not so we saw
blocking code how do you write lock-free
code or weight free code
well turns out there is another package
in the same package and it is sync
atomic and there is only these little
set of functions in there and this is
store and loads the seven gates this is
add or subtract if you use negative
values this is swap simple exchange and
this fancy function called compare and
swap which is swap but they will leave a
certain preconditioners matter and the
cool thing about these function is that
they are thread safe by design actually
they are CPU instructions so your CPU
cares about that this works and you
don't need new T C's for that they just
work just work means they're just a
little bit slower just ten times but
let's be honest like that takes half a
cycle so we're talking about like
something like five to thirty cycles
which is still quite fast you should
just not litter them all over your code
because that would be bad um but the
problem about atomic operations is yes
they are only that's few operations this
sounds a lot like easy to learn but hard
to master and that is really the case so
there are a lot of edge cases and most
people are afraid of you think that for
reason but I just want to give you some
patterns at hand so that you can use
them and maybe start programming
luckless and the first pattern I want to
show you is the so-called spinning
compare-and-swap
and this is a very very basic pattern
and you see that like all over the place
and it's quite simple you just need two
things you need a variable which is our
state and you need a constant which is
called free in this case and now you
start spinning and you use these CAS or
compare and
swap operation so you see if your state
equals the free value and if it does you
immediately change it to something else
and now the cool thing as this is an
atomic operation at the moment you were
able to change this value you were
definitely the only one doing this so
everybody else is still spinning and
you're the only one who's not and
everybody's still spinning until you set
it to free again does it sound familiar
somehow sounds a lot like a lock doesn't
it well actually it is and if you look
at the implementation of the sync mutex
it's using exactly that pattern and to
illustrate that it's this so this is the
most basic lock that you can do this how
many lines of code is that reform yeah
okay
so what do we have we have the state
then we have our free constant which
happens to be zero because there like
that and when we lock we compare and
swap over this state and try to look for
free and if it's really we set it to 42
and if it's not free we just continue we
didn't do anything and there's this
another thing which is run time gave
schedule and I just promised not to talk
about guru cheese but here I have to if
you have such a tight loop blue please
always use run time go scheduled because
otherwise the program will lock up in a
singer threaded case so if you have only
one CPU this will lock up a lot of fun
and go one point for where this was a
default him so you can use that if you
have more functions in between you don't
need that it's just if you don't have
any functions there it's a simple
explanation there's more beyond that
okay so once we have our lock we can do
some things and when can unlock it again
so the cool thing about this pattern is
that you now have the choice to do
something in the case where normal mutex
would have locked so you can do
operations there you can do whatever you
want you can maybe switch to something
else or load a file or whatever but you
certainly don't need to block you can do
other things okay but this is a rather
simple thing and to take this a little
bit more complex so make it a little bit
more useful even let's have a look
another pattern that actually uses this
in between and this is called the ticket
storage and this is now a little bit
more complicated now we have three
things we have an index data structure
so for example a slice we have a ticket
variable and we have verdun variable and
when you want to add something to our
storage then the first thing that we do
is we draw a new ticket so we add one to
our tickets variable and as this
function is atomic you can be sure that
you are the only one who got that number
nobody else will okay until in 64 over
fluids but this takes some time so now
so we now have an index that only we own
we can use that to store data so nobody
else will store data at that index so we
don't have any race conditions there and
that it's nice because we can just go
ahead and when we're done we increment
the done counter so that we know where
the data is written because the write
itself is not atomic okay so let's have
a look at some code so this is a little
bit more clear so here we have it we
have the ticket variable we have the
done variable and we have our slots
which for simplicity reason is now a
slice and normally you would have
something like a reading buffer here
and if we do a put the first thing is we
do an atomic at and we have to subtract
meaning a minus 1 because we get the
value after the operation and as soon as
we did that we can be sure that nobody
at our slots will write so we can do
that and then we increment it by using
what we already saw this looks a little
weird but let me get it to that the more
interesting part is they get done
function because this function is
essentially weight free it will always
immediately return the whole portion of
your slice that is done that is written
it will return it will not block it will
just always work and this is pretty nice
now let's talk about this thing here
because this block is essentially
keeping us from being weight free in
this function so why is it in there now
why do we need to do that well yeah we
can try out
so let's do some debugging so for
debugging atomic code I use a little
game called the instruction pointer game
and what you do is you take your code
pull up two windows there same code in
both windows and they have one
instruction pointer and this instruction
pointer may move through both windows
but it can only be in one window at a
time and the rule is you can switch at
any instruction and by instruction I
mean assembler instruction so if you see
plus equals this are actually two
instructions
so have fun jumping in between the plus
and the equal so if you do that then you
watch your code and your variables and
see if you have a race condition doing
that just what we're now going to do so
we replace the loop with a simple add
and play the instruction pointer game so
we start on the left and we get our
tickets so we get the ticket number one
and now we jump over because we can and
we get another ticket which is two
because yeah well we always get this new
ticket and nobody else will have it
let's just go on say yeah we write to
our slot everything fine but then we
increment the done and then we're saying
Oh index number one is done but index
number one is not done we have not
written to it yet
so this is our array so we have race
condition here and that is the reason
why we have this loop this loop will
essentially wait until the done variable
is at the state of our tickets so we can
increase it so it will have an ordered
release so to say okay so these are new
two examples of how you can do Tomic
code and you could probably come up with
some more patterns but as we're running
out of time let's just give you a few
guides for writing atomic code the first
one is if you use an atomic variable or
use atomic functions on a variable just
always use atomic functions on Intel
this doesn't hurt you that much another
platform it does
why does well there are some excellent
talks by herbs that are like two hours
or something like that and he will
explain that so I won't do that now but
trust me just do it it you will have
some weird side effects if you don't
and if you got that managed then look
for situations where you have uniqueness
like for example this you were the only
one who could have changed that variable
you are the only one who got that number
and if you have the situations then
exploit it try to do something with that
and one thing though avoid changing two
things at a time because this is super
hard you can do it like with bit
operations so for example having two
32-bit values in one 64-bit integer but
every time I show these code to my
colleagues they just hate me for that
because they don't understand it
and someone still trusts don't doesn't
trust me that this actually works okay I
hope it is the other one is you can try
to do ordering of your operations but
this is really hard because sometimes
it's not possible and sometimes you
forget one specific case so not that
easy good so now we've seen quite a fair
lots of things so we have seen channels
we've seen CSP we've seen atomic code so
where does it all fit it in their
overall picture of concurrency the first
thing that you should think of when
doing concurrency is avoid blocking and
avoid race conditions this is the most
essential thing and the easiest way to
do that is by using CSP because they you
don't have shared state and shared state
is number one reason for race conditions
and for locking so if you don't have
this you're fine and really 90% of the
cases can be done with CSP please use it
and if you have one of this rare cases
where it doesn't work then first thing
you should do use the sync package use a
mutex because it's simple
people will understand it and it's
proven and if you have something that
does still not work or you have a very
simple case like just incrementing an
integer for a counter then use atomic
operations or if you want to have some
fun grow up your favorite data structure
and try to implement it lock less and
then you will see how hard it can be to
write a linked list and by that I want
to close the talk thank you for
listening
thank you are any questions nothing
oh you got to give him a minute no
questions all right let's give honor a
big one applause thank you that's our
last talk before the morning break I
believe there is lunch and we resume at
2:00 p.m. 1400 hours thank you
