<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PagesRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;


#[ORM\Entity(repositoryClass: PagesRepository::class)]
class Pages
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'text')]
    private $presentation;

    #[ORM\Column(type: 'string', length: 255)]
    private $networks;

    #[ORM\OneToOne(inversedBy: 'page', targetEntity: Users::class, cascade: ['persist'])]
    private $user;

    // #[ORM\Column(type: 'string', length: 255, nullable: true)]
    // private $Picture;

    #[ORM\OneToMany(mappedBy: 'pages', targetEntity: Images::class, orphanRemoval: true, cascade:['persist'])]
    private $images;

    #[ORM\OneToMany(mappedBy: 'pages', targetEntity: Comments::class, orphanRemoval: true)]
    private $comments;

    public function __construct()
    {
        $this->images = new ArrayCollection();
        $this->comments = new ArrayCollection();
    }

   
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPresentation(): ?string
    {
        return $this->presentation;
    }

    public function setPresentation(string $presentation): self
    {
        $this->presentation = $presentation;

        return $this;
    }

    public function getNetworks(): ?string
    {
        return $this->networks;
    }

    public function setNetworks(string $networks): self
    {
        $this->networks = $networks;

        return $this;
    }

    public function getUser(): ?Users
    {
        return $this->user;
    }

    public function setUser(?Users $user): self
    {
        $this->user = $user;

        return $this;
    }

    // public function getPicture(): ?string
    // {
    //     return $this->Picture;
    // }

    // public function setPicture(?string $Picture): self
    // {
    //     $this->Picture = $Picture;

    //     return $this;
    // }

    /**
     * @return Collection<int, Images>
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Images $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
            $image->setPages($this);
        }

        return $this;
    }

    public function removeImage(Images $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getPages() === $this) {
                $image->setPages(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Comments>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPages($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): self
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getPages() === $this) {
                $comment->setPages(null);
            }
        }

        return $this;
    }

  
   
   
}
